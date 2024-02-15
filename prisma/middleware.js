const { Prisma } = require("@prisma/client");
const { customAlphabet } = require("nanoid");

// Adjust parameters as needed for your confirmation number format
const nanoid = customAlphabet("1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ", 10);

const prisma = new Prisma();

prisma.$use(async (params, next) => {
	if (params.model == "FormSubmission" && params.action == "create") {
		params.args.data.confirmationNumber = nanoid();
	}
	return next(params);
});

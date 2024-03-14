// SignInNotice.tsx
import React from "react";

const SignInNotice = () => {
	return (
		<div className="p-6">
			<h1 className="font-bold text-orange-500 text-3xl pb-4 flex justify-center">
				Onsite Request Form
			</h1>
			<div className="text-white mt-4 ">
				<p className="font-bold">📝 Interpreter Request Notice</p>
				<p>
					For onsite request provide 3 business days notice if possible. We
					accommodate last-minute Virtual Onsite Interpreting Requests when
					necessary.
				</p>

				<p className="font-bold mt-6">💡 Cost-Saving Tips</p>
				<p>
					Schedule interpreters Monday-Friday, 8am-5pm to avoid after-hour
					premiums and save on costs.
				</p>

				<p className="font-bold mt-6">🚫 Cancellation Policy</p>
				<p>
					Contact us at least 1 full business day in advance to cancel a request
					and avoid cancellation fees.
				</p>

				<p className="font-bold mt-6">💰 Premium Rates for Short Notice</p>
				<p>
					Requests made with less than one full business day's notice may incur
					premium rates.
				</p>
			</div>
		</div>
	);
};

export default SignInNotice;

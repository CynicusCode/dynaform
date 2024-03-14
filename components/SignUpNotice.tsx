// SignUpNotice.tsx
import React from "react";

const SignUpNotice = () => {
	return (
		<div className="p-6">
			<h1 className="font-bold text-orange-500 text-3xl pb-4 flex justify-center">
				Sign Up Notice
			</h1>
			<div className="text-white mt-4">
				<p className="font-bold">🔑 Client ID Information</p>
				<p>
					If you do not have a clientId, please check with a supervisor. If
					you're a supervisor, call your sales agent. We do not provide client
					ID over the phone for security reasons.
				</p>

				<p className="font-bold mt-6">🔒 Password Requirements</p>
				<p>
					Password must be at least 6 digits long and it should contain special
					characters and numbers to ensure security.
				</p>

				<p className="font-bold mt-6">✉️ Account Creation Confirmation</p>
				<p>
					You'll receive a second email confirming your account creation. Please
					check your spam folder if you do not see it in your inbox.
				</p>

				<p className="font-bold mt-6">🚀 Getting Started</p>
				<p>
					Once your account is confirmed, you can start exploring all the
					features available to you. Welcome aboard!
				</p>
			</div>
		</div>
	);
};

export default SignUpNotice;

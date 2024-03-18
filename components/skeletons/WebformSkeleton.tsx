import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Webform: React.FC = () => {
	return (
		<main className="bg-white relative flex justify-center items-center h-screen m-0">
			<div className="relative max-w-screen-2xl w-full h-full flex justify-center items-center bg-stone-50">
				{/* Adjusted container for responsive positioning and doubling size of the Image component at SM breakpoint */}
				<div className="absolute z-50 rounded-xl overflow-hidden top-10 left-1/2 transform -translate-x-1/2 sm:w-[200px] sm:h-[100px] md:mr-[27%] md:left-auto md:transform-none lg:top-4 lg:w-[200px] lg:h-[100px]">
					<Skeleton className="h-full w-full rounded-xl" />
				</div>
				{/* Responsive margin applied to the section */}
				<section className="h-[90%] w-[95%] bg-white shadow-2xl m-0 relative flex flex-col items-center justify-center md:m-6 rounded-xl max-w-3xl">
					<div className="flex flex-col space-y-3">
						<Skeleton className="h-4 w-[250px]" />
						<div className="space-y-2">
							<Skeleton className="h-4 w-[250px]" />
							<Skeleton className="h-4 w-[200px]" />
						</div>
					</div>
				</section>

				{/* Adjusted positioning for the blue section */}
				<section className="hidden sm:flex h-[85%] md:-translate-x-14 bg-blue-900 w-[35%] -m-6 z-10 relative justify-center items-center rounded-xl max-w-lg shadow-xl">
					<div className="flex flex-col space-y-3">
						<Skeleton className="h-4 w-[200px]" />
						<div className="space-y-2">
							<Skeleton className="h-4 w-[180px]" />
							<Skeleton className="h-4 w-[160px]" />
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Webform;

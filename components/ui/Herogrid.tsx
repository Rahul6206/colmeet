"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";



export function GlowingEffectDemoSecond() {
    return (
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <GridItem
                area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                backgroungImage={<div className="h-10 w-10 flex items-center justify-center">
                    <Box className="h-full w-full object-cover object-center text-black dark:text-neutral-400" />

                </div>}
                title="Schedule Interviews Effortlessly"
                description="Easily set up and manage interview slots for candidates. Streamline your hiring process with automated scheduling."
            />

            <GridItem
                area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                backgroungImage={
                    <div className="h-10 w-10 flex items-center justify-center">
                        <Settings className="h-full w-full object-cover object-center text-black dark:text-neutral-400" />

                    </div>
                }
                title="Seamless Interview Experience"
                description="Conduct and participate in interviews with an intuitive, user-friendly interface designed for both interviewers and candidates."
            />

            <GridItem
                area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                backgroungImage={
                    <div className="h-10 w-10 flex items-center justify-center">
                        <Lock className="h-full w-full object-cover object-center text-black dark:text-neutral-400" />
                    </div>
                }
                title="Secure & Private Meetings"
                description="All interviews are encrypted and private, ensuring a safe environment for both interviewers and candidates."
            />

            <GridItem
                area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                backgroungImage={
                    <div className="h-10 w-10 flex items-center justify-center">
                        <Sparkles className="h-full w-full object-cover object-center text-black dark:text-neutral-400" />
                    </div>
                }
                title="High Quality Audio and Video"
                description="Experience crystal-clear audio and video during interviews, ensuring effective communication and a professional environment for both interviewers and candidates."
            />

            <GridItem
                area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                backgroungImage={
                    <div className="h-10 w-10 flex items-center justify-center">
                        <Search className="h-full w-full object-cover object-center text-black dark:text-neutral-400" />
                    </div>
                }
                title="Real-Time Feedback"
                description="Interviewers can provide instant feedback and ratings, helping candidates improve and companies make informed decisions."
            />
        </ul>
    );
}

interface GridItemProps {
    area: string;
    backgroungImage: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, backgroungImage, title, description }: GridItemProps) => {
    return (
        <li className={`min-h-[16rem] list-none ${area}`}>
            <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 not-dark:bg-gradient-to-br from-blue-200 via-white to-blue-300">
                <GlowingEffect
                    blur={0}
                    borderWidth={4}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="border-0.75 relative flex h-full overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#252449]">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit flex justify-center items-center rounded-lg border p-2">
                            {backgroungImage}
                        </div>
                        <div className="space-y-3">
                            <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                                {title}
                            </h3>
                            <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

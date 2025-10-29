import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="120"
      height="30"
      {...props}
    >
      <text
        x="10"
        y="35"
        fontFamily="'Poppins', sans-serif"
        fontSize="30"
        fontWeight="bold"
        fill="hsl(var(--primary))"
      >
        Voyage
      </text>
      <text
        x="125"
        y="35"
        fontFamily="'Poppins', sans-serif"
        fontSize="30"
        fontWeight="bold"
        fill="hsl(var(--accent))"
      >
        BJ
      </text>
    </svg>
  );
}


export function Star({ className, ...props }: SVGProps<SVGSVGElement> & { filled?: boolean }) {
    const fillClass = props.filled ? "text-yellow-400" : "text-gray-300";
    const strokeClass = props.filled ? "text-yellow-400" : "text-gray-300";
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={props.filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(className, fillClass, strokeClass)}
        {...props}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
  }
import React from 'react'

const DefaultSection = ({
    children,
    className,
    outerClassName,
    outerStyle,
    overlay,
    ...attributes
}: 
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
    {
        outerClassName?: React.HTMLAttributes<HTMLDivElement>["className"],
        outerStyle?: React.HTMLAttributes<HTMLDivElement>["style"],
        overlay?: {
            color: string,
            opacity: number,
        },
    }
) => {

  return (
    <div
        className={`w-full flex items-center justify-center relative ${outerClassName}`}
        style={outerStyle}
    >
        {
            overlay &&
            <div
                className='absolute top-0 left-0 w-full h-full z-0'
                style={{
                    backgroundColor: overlay.color,
                    opacity: `${overlay.opacity}%`,
                }}
            />
        }
        <div
            className={`w-full max-w-[1140px] z-10 ${className || ""}`}
            {...attributes}
        >
            {children}
        </div>
    </div>
  )
}

export default DefaultSection
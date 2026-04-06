import type { FC, ReactNode } from "react";

interface ButtonProps {
    typeButton: 'link' | 'button',
    className?: string,
    href?: string,
    content: ReactNode,
    onClick?: () => void,
    attribute?: string[],

}

const ButtonOrLink: FC<ButtonProps> = ({typeButton, className="", href="/", content, onClick}) => {
    
    /// link
    if (typeButton === 'link') {
        return (
            <a className={className} href={href}>{content}</a>
        )        
    }


    /// button
    if (typeButton === 'button') {
        return (
            <button 
                type={typeButton}
                className={ `${className} button`}
                onClick={onClick}

            >
                {content}
            </button>
        )
    }


}

export default ButtonOrLink
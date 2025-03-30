interface IconProps {
    icon: React.ReactNode;
    href: string;
    className?: string;
}

const IconLink: React.FC<IconProps> = ({ icon, href, className }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl text-blue-950 transition-all duration-300 ease-in-out hover:text-orange-400 md:text-base ${className}`}
        >
            {icon}
        </a>
    );
};

export default IconLink;

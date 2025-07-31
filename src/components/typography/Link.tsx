import {type LinkTypes} from "../../types/TypographyTypes"

function Link({link, linkText}: LinkTypes) {
    return (
        <a
            href={link}
            target="_blank"
            className="text-primary hover:underline transition-colors"
        >{linkText}</a>
    )
}

export default Link
import type { FC } from "react";

interface PropsValue {
    content: string,
}

const Title:FC<PropsValue> = ({content}) => {

    return (
        <h1>{content}</h1>
    )
}

export default Title
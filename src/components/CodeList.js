import React from "react";
import CodeItem from "./CodeItem"

const CodeList = props => {
    return(
        <ul>
            {
                props.codes.map(code => (
                    <CodeItem
                        key={code.id}
                        code={code}
                        codeSelected={props.codeSel}
                        deleteCode={props.deleteCode}
                    />
                ))}
        </ul>
    )
}

export default CodeList
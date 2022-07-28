import React, {useState, useEffect, forwardRef, useImperativeHandle } from "react"

const CodeInput = forwardRef((props, ref) => {
    var{ id, title, code_string} = props.code
    const [inputText, setInputText] = useState({
        title : title,
        code: code_string,
    })

    useImperativeHandle(
        ref,
        () => ({
            changeInputText() {
                setInputText({
                    title: title,
                    code: code_string,
                })
                
            }
        }),
    )

    const onChange = e =>{
        setInputText({
            ...inputText,
           [e.target.name]: e.target.value,
        })
    }

    useEffect(() => {
        return () => {
            console.log("Cleaning UP")
        }
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        if(inputText){
            if( id === 0){
                props.addCodeProps(inputText.title, inputText.code)

            }else {
                props.updateCodeProps(id, inputText.title, inputText.code)
            }
            
        } else {
            alert("Please write item")
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={inputText.title}
            name="title"
            placeholder="input title"
            onChange={onChange}
        />
        <button>Save</button>
        <textarea
            className="codetextinput"
            type="text"
            value={inputText.code}
            placeholder="input code"
            name="code"
            onChange={onChange}
        />
        
        </form>
        </>
    )
})

export default CodeInput
import React, { useState, useRef } from "react"
import CodeList from "./CodeList"
import { v4 as uuidv4 } from "uuid"
import CodeInput from "./CodeInput"
import { useEffect } from "react"

const CodeContainer = () => {
    const [codes_list, setCode] = useState(getInitialCodeList)

    const [editCode, setEditCode] = useState({
        id: 0,
        title: "new code",
        code_string: "",
    })

    const childRef = useRef();

    const codeSelected = id => {
        //console.log(editCode)
        codes_list.map(code => { 
            if (code.id === id) {
                setEditCode(code)
            }
        })
    }

    function getInitialCodeList() {
        // getting stored items
        const temp = localStorage.getItem("codes_list")
        const savedCodeList = JSON.parse(temp)
        return savedCodeList || []
    }

    useEffect(()=>{
        //update form
        childRef.current.changeInputText()
    })

    useEffect(()=>{
        //store in localstorage
        const temp = JSON.stringify(codes_list)
        localStorage.setItem("codes_list", temp)
    }, [codes_list])

    const delCode = id => {
        setCode([
            ...codes_list.filter(code => {
                return code.id !== id
            }),
        ])
    }

    const updateCode = (id, title, code_string) => {
        setCode(
            codes_list.map(code =>{
                if(code.id === id){
                    code.title = title
                    code.code_string = code_string
                }
                return code
            })
        )
    }

    const addNewCode = (title, code_string) =>{
        const newCode = {
            id: uuidv4(),
            title :title,
            code_string: code_string,
        }
        setCode([...codes_list, newCode])
        setEditCode(newCode)
    }

    const addNewCodea = () =>{
        const newCode = {
            id: uuidv4(),
            title :"new code",
            code_string: "",
        }
        setCode([...codes_list, newCode])
        setEditCode(newCode)
    }

    return (
        <div>
            <div id="sidebar">
            <button onClick={addNewCodea}>Create New</button>
            <CodeList
                codes={codes_list}
                codeSel={codeSelected}
                deleteCode={delCode}
            />
            </div>
            <CodeInput
                code={editCode}
                addCodeProps={addNewCode}
                updateCodeProps = {updateCode}
                ref = {childRef}
            />
        </div>
    )
}

export default CodeContainer
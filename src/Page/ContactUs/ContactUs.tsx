import React, {useEffect, useRef, useState} from "react";
import {Input} from "../../Components/Input/Input";
import {TextArea} from "../../Components/TextArea/TextArea";
import {Button} from "../../Components/Button/Button";
import {FormData} from "./types";
import {submitFormData} from "../../Data/SendForm/data";

export const ContactUs: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const telRef = useRef<HTMLInputElement>(null)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const [disableInputEmail, setDisableInputEmail] = useState<boolean>(false)
    const [disableInputName, setDisableInputName] = useState<boolean>(false)
    const [disableInputArea, setDisableInputArea] = useState<boolean>(false)
    const [isDisabled, setIsDisabled] = useState<boolean>(false)

    useEffect(() => {
        const enable:boolean =
            disableInputEmail &&
            disableInputName &&
            disableInputArea

        if (enable) {
            setIsDisabled(enable)
        }
    }, [
        disableInputEmail,
        disableInputName,
        disableInputArea,
    ])
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsDisabled(false)

        const valueName = nameRef.current?.value
        const valueEmail = emailRef.current?.value
        const valueTel = telRef.current?.value
        const valueArea = textAreaRef.current?.value

        const formData: FormData = {
            Name: valueName,
            Tel: valueTel,
            Email: valueEmail,
            Commit: valueArea,
        }

        try {
            await submitFormData(formData)
            console.log('Form data submitted successfully:', formData)
            if (nameRef.current) nameRef.current.value = ''
            if (emailRef.current) emailRef.current.value = ''
            if (telRef.current) telRef.current.value = ''
            if (textAreaRef.current) textAreaRef.current.value = ''
        } catch (error) {
            console.error('Error submitting form data:', error)
        }
    }
    return (
        <section className={'pt-5 pb-32 max-lg:pb-10'}>
            <div className={'container'}>
                <h2 className={'text-3xl font-semibold'}>Contact Us</h2>

                <div className={'mt-3'}>
                    <p className={'text-base'}>
                        We love hearing from you, our Shop customers.
                    </p>
                    <p className={'text-base'}>
                        Please contact us and we will make sure to get back to you as soon as we possibly can.
                    </p>
                </div>

                <form
                    className={'mt-5 flex flex-col gap-8 max-lg:gap-4'}
                    onSubmit={handleSubmit} autoComplete="on"
                >
                    <div className={'grid grid-cols-2 gap-8 max-lg:grid-cols-1 max-lg:gap-4'}>
                        <div>
                            <Input
                                type={'text'}
                                required={true}
                                title={'Your Name'}
                                inputRef={nameRef}
                                IsDisable={setDisableInputName}
                                id={'inputName'}
                                placeholder={'Your Name'}
                            />
                        </div>

                        <div>
                            <Input
                                type={'email'}
                                required={true}
                                title={'Your Email'}
                                inputRef={emailRef}
                                IsDisable={setDisableInputEmail}
                                id={'inputEmail'}
                                placeholder={'Your Email'}
                            />
                        </div>

                        <div>
                            <Input
                                type={'tel'}
                                required={false}
                                title={'Your Phone Number'}
                                inputRef={telRef}
                                id={'inputTelephone'}
                                placeholder={'Your Phone'}
                            />
                        </div>
                    </div>

                    <div>
                        <TextArea
                            textareaRef={textAreaRef}
                            title={'What’s on your mind?'}
                            required={true}
                            IsDisable={setDisableInputArea}
                            placeholder={'Jot us a note and we’ll get back to you as quickly as possible'}
                        />
                    </div>

                    <Button type={'submit'} title={'submit'} isDisabled={isDisabled} className={'px-20 py-2.5 uppercase max-lg:w-full'}/>
                </form>
            </div>
      </section>
    )
}

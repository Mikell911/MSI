import React, {useEffect, useRef, useState} from "react";
import {Input} from "../../Components/Input/Input";
import {Button} from "../../Components/Button/Button";
import {Link} from "react-router-dom";
import {formLogin} from "./type";


export const LoginPage:React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null)
    const passRef = useRef<HTMLInputElement>(null)
    const [disableInputEmail, setDisableInputEmail] = useState(false)
    const [disableInputPass, setDisableInputPass] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const enable:boolean = disableInputEmail && disableInputPass
        if (enable) {
            setIsDisabled(enable)
        }
    }, [disableInputEmail, disableInputPass]);
    const handSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsDisabled(true);
        setIsLoading(true);
        setError(null);

        const email = emailRef.current?.value;
        const password = passRef.current?.value

        const loginDate: formLogin = {
            email: `${email}`,
            password: `${password}`,
        }

        try {
            console.log('Login successfully:', loginDate)
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ loginDate }),
            });

            const data = await response.json();
            if (data.success) {
                console.log('Login successful');
                if (emailRef.current) emailRef.current.value = '';
                if (passRef.current) passRef.current.value = '';
            } else {
                console.log('Login failed');
                setError('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('Login failed. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className={"pt-7 pb-14"}>
            <div className={"container"}>
                <h2 className={"font-bold text-3xl"}>
                    Customer Login
                </h2>

                <div className={"grid grid-cols-2 gap-6 mt-5 px-16 max-lg:grid-cols-1 max-lg:px-0"}>
                    <div className={"py-9 px-14 bg-light-grey max-sm:px-5 max-sm:py-5"}>
                        <h4 className={"text-lg font-bold max-sm:text-center"}>
                            Registered Customers
                        </h4>

                        <p className={"mt-6 text-sm max-sm:text-center"}>
                            If you have an account, sign in with your email address.
                        </p>

                        <form autoComplete="on" className={"mt-6"} onSubmit={handSubmit}>
                            <Input
                                title={'Email'}
                                required={true}
                                type={'email'}
                                id={'inputEmail'}
                                placeholder={'Your Name'}
                                inputRef={emailRef}
                                IsDisable={setDisableInputEmail}
                                className={"max-sm:p-2"}
                            />

                            <Input
                                title={'Password'}
                                required={true}
                                type={'password'}
                                id={'inputPassword'}
                                placeholder={'Your Password'}
                                inputRef={passRef}
                                IsDisable={setDisableInputPass}
                                className={"max-sm:p-2"}
                            />

                            <div className={"mt-6 flex items-center gap-6 max-lg:justify-center max-sm:flex-col"}>
                                <Button type={"submit"} title={"Sing In"} isDisabled={isDisabled} className={"max-sm:w-full"}/>
                                <Link to="/" className={"hover:text-blue hover:underline"}>
                                    Forgot Your Password?
                                </Link>
                            </div>
                        </form>
                    </div>

                    <div className={"py-9 px-14 flex justify-center items-center bg-light-grey text-center max-sm:px-0"}>
                        <div>
                            <h2 className={"text-lg font-bold"}>
                                New Customer?
                            </h2>

                            <p className={"mt-6 text-sm"}>
                                Creating an account has many benefits:
                            </p>
                            <ul className={"mt-3 text-sm"}>
                                <li>
                                    Check out faster
                                </li>
                                <li>
                                    Track orders and more
                                </li>
                                <li>
                                    Keep more than one address
                                </li>
                            </ul>

                            <Link to="/" className={"block mt-5 rounded-full cursor-pointer text-blue text-sm font-semibold " +
                                "px-10 py-3 border border-blue hover:bg-blue hover:text-white"
                            }>
                                Create An Account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {isLoading && <div className="preloader">Loading...</div>}
            {error && <div className="error-message">{error}</div>}
        </section>
    )
}
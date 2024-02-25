import React from "react";
import IMG from "./img/Ilustration.png"

interface MaintenancePageProps {
    title?: string;
    text?: string;
}

export const MaintenancePage:React.FC<MaintenancePageProps> = (props) => {
  const {
      title,
      text,
  } = props
    return (
        <section className={"bg-light-grey py-16"}>
            <div className={"container grid grid-cols-2 items-center justify-center max-sm:grid-cols-1 max-sm:gap-6"}>
                <div className={"flex items-center justify-center"}>
                    <div className={"max-w-3xl"}>
                        <h1 className={"text-5xl max-sm:text-3xl"}>{title ? title : 'Page is Under Construction'}</h1>
                        <p className={"mt-5 max-sm:text-sm"}>{text ? text : 'We\'re currently on creating something fantastic.'}</p>
                    </div>
                </div>
                <div className={"flex items-center justify-center"}>
                    <img src={IMG} alt="ilustrator" className={"max-w-xs"}/>
                </div>
            </div>
        </section>
    )
}
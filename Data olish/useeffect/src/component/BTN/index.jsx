import Btnscss from "./btn.module.scss";


export default function Btn({text1}) {
    return(
    <>
        <button className={Btnscss.btn}>{text1}</button>
    </>
    );
}
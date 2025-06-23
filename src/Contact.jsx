import { useSearchParams } from "react-router-dom";

function Contact(){

    const [data,setData]=useSearchParams();
    console.log(data.get('name'));
    console.log(data.get('email'));
    return(
        <>
        <h1>This is contact page</h1>
        <button
        onClick={()=>{
            setData({name:"prathmesh",email:'prathmesh@gmail.com'})
        }}
        >GetData</button>
        </>
    );
}
export default Contact;
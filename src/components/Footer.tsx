const Footer = () =>{
const currentYear:number = new Date().getFullYear();
    return(

        <>
            <footer className="bg-cf-dark-gray text-white">
                <div>
                    @{currentYear} Coding Factory 8. All Rights Reserved.
                </div>
            </footer>

        </>
    )
}

export default Footer;
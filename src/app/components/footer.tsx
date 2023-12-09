import Image from "next/image";

export default function Footer() {
    return (
        <footer
            className="
            flex flex-wrap
            items-center
            justify-center
            w-full py-4
            md:py-0 px-4
            text-xl"
            id="footer"
        >
            <div className="w-full md:flex md:items-center md:w-auto"><a href="mailto:jcucuzza@pm.me">Contact Me</a></div>
            <div className=" md:flex md:items-center md:w-auto">
                <a className="md:p-4 py-2 flex" href="https://www.linkedin.com/in/justin-cucuzza/"><Image src="/static/linkedin.svg" alt="linkedin logo" width="32" height="32"/></a>
                <a className="md:p-4 py-2 flex" href="https://github.com/d1ppingsauce"><Image src="/static/github.svg" alt="github logo" width="32" height="32"/></a>
            </div>
        </footer>
    )
}
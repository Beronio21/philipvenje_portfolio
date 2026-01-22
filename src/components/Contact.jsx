import { useEffect, useState } from 'react'

export default function Contact() {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        const hCaptcha = event.target.querySelector('textarea[name=h-captcha-response]').value;
        if (!hCaptcha) {
            event.preventDefault();
            setResult("Please fill out captcha field");
            return
        }
        setResult("Sending....");
        const formData = new FormData(event.target);

        // Use Vite env var for Web3Forms access key (set VITE_WEB3FORMS_ACCESS_KEY)
        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
        if (!accessKey) {
            setResult("Form not configured. Missing Web3Forms access key.");
            return;
        }
        formData.append("access_key", accessKey);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setResult(res.message);
            event.target.reset();
        } else {
            console.log("Error", res);
            setResult(res.message);
        }
    };

    function CaptchaLoader() {
        const captchadiv = document.querySelectorAll('[data-captcha="true"]');
        if (captchadiv.length) {
            let lang = null;
            let onload = null;
            let render = null;

            captchadiv.forEach(function (item) {
                const sitekey = item.dataset.sitekey;
                lang = item.dataset.lang;
                onload = item.dataset.onload;
                render = item.dataset.render;

                if (!sitekey) {
                    item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
                }
            });

            let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
            if (lang) {
                scriptSrc += `&hl=${lang}`;
            }
            if (onload) {
                scriptSrc += `&onload=${onload}`;
            }
            if (render) {
                scriptSrc += `&render=${render}`;
            }

            var script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.defer = true;
            script.src = scriptSrc;
            document.body.appendChild(script);
        }
    }

    useEffect(() => {
        CaptchaLoader();
    }, []);
    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">

            <h4 className="text-center mb-2 text-sm uppercase tracking-widest font-semibold">Connect</h4>
            <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight">Get in touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-white/90">I&apos;d love to hear from you. Use the form below for project enquiries or opportunities.</p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">

                <input type="hidden" name="subject" value="Philip Venje Beronio - New form Submission" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-6">
                    <input type="text" placeholder="Your name" className="flex-1 px-4 py-3 outline-none border-2 border-black/20 rounded-sm bg-white dark:bg-transparent dark:border-white/20 font-semibold" required name="name" />

                    <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 outline-none border-2 border-black/20 rounded-sm bg-white dark:bg-transparent dark:border-white/20 font-semibold" required name="email" />
                </div>

                <textarea rows="6" placeholder="Your message" className="w-full px-4 py-3 outline-none border-2 border-black/20 rounded-sm bg-white mb-6 dark:bg-transparent dark:border-white/20 font-semibold" required name="message"></textarea>

                <div className="h-captcha mb-6 max-w-full" data-captcha="true"></div>

                <div className="flex items-center justify-center">
                    <button type='submit' className="py-3 px-8 flex items-center gap-3 bg-black text-white rounded-sm uppercase tracking-wider font-bold shadow-[0_12px_30px_rgba(0,0,0,0.25)] hover:translate-y-[-2px] transition-transform duration-200 dark:bg-white dark:text-black">
                        <span>Send Message</span>
                        <img src="./assets/right-arrow-white.png" alt="" className="w-4 dark:invert" />
                    </button>
                </div>

                <p className='mt-4 text-center text-sm text-gray-600 dark:text-white/80'>{result}</p>
            </form>
        </div>
    )
}
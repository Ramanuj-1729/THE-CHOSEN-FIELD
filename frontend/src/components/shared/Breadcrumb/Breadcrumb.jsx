import ScrollToTopNavLink from "../../ScrollToTopNavLink/ScrollToTopNavLink";

const Breadcrumb = ({currPage}) => {
    return (

        <nav className="flex mx-12" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center text-font_two">
                    <ScrollToTopNavLink to="/" className="inline-flex items-center text-base">
                        <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        Home
                    </ScrollToTopNavLink>
                </li>

                <li>
                    <div className="flex items-center">
                        <svg className="w-3 h-3 text-gray-400 mx-1 text-font_one" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span to="#" className="ml-1 text-base text-font_one font-medium">{currPage}</span>
                    </div>
                </li>
            </ol>
        </nav>

    );
}

export default Breadcrumb;
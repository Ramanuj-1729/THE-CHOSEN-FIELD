import ScrollToTopNavLink from '../../components/ScrollToTopNavLink/ScrollToTopNavLink';

const NotFound = () => {
    return (
        <div className="min-h-screen p-5 flex flex-grow items-center justify-center">
            <div className="rounded-lg bg-white p-8 text-center shadow-xl">
                <h1 className="mb-4 text-4xl font-bold text-font_one">404</h1>
                <p className="text-font_two">Oops! The page you are looking for could not be found.</p>
                <ScrollToTopNavLink to="/" className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-primary"> Go back to Home </ScrollToTopNavLink>
            </div>
        </div>
    )
}

export default NotFound;
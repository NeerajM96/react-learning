import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
    return <div>
        <h1>Oops, Something went wrong!</h1>
        <h2>{err.status} : {err.data}</h2>
    </div>
}

export default Error
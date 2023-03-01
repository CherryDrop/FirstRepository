export default function LogoutButton({
    children,
    className: scopedClassName,
}: {
    children: React.ReactNode
    className: string
}): JSX.Element {
    const handleLogout = async () => {
        const csrfResponse = await fetch("/api/csrf/get-token", {
            credentials: "include",
        }).catch((err) => {
            return undefined 
        })
        if (!csrfResponse) {alert("Error: Could not get CSRF token"); return}
        const {csrfToken: scopedCsrfToken} = await csrfResponse.json().catch((err) => {
            console.log(err)
            return {csrfToken: undefined}
        })
        if (!scopedCsrfToken) {alert("Error: Could not retrieve from response"); return}


        const headers = {
            "x-csrf-token": scopedCsrfToken,
        }

        fetch("/api/auth0/logout", {
            method: "GET",
            headers: headers,
        }).then((res) => {
            if (res.status === 200) {
                res.json().then((data) => {
                    window.location = data.auth0logout
                })
            }
        });
    }
    return (
        <div className={scopedClassName} onClick={handleLogout}>
            {children}
        </div>
    )
}
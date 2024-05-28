export default function LoginForm() {
    return (
        <form>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" />
                <div className="h-4"></div>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />
                <div className="h-4"></div>
            </div>
            <button>Log In</button>
        </form>
    )
}

export default function RegisterForm() {
    return (
        <form>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" />
                <div className="h-4"></div>
            </div>
            <div>
                <label htmlFor="surname">Surname:</label>
                <input type="text" id="surname" />
                <div className="h-4"></div>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" />
                <div className="h-4"></div>
            </div>
            <div>
                <label htmlFor="photo">Photo:</label>
                <input type="text" id="photo" />
                <div className="h-4"></div>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />
                <div className="h-4"></div>
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" />
                <div className="h-4"></div>
            </div>
            <button>Submit Data</button>
        </form>
    )
}

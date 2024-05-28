export default function BookForm() {
    return (
        <form>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" />
                <div className="h-4"></div>
            </div>
            <div>
                <label htmlFor="author">Author:</label>
                <input type="text" id="author" />
                <div className="h-4"></div>
            </div>
            <div>
                <label htmlFor="type">Book Type:</label>
                <input type="text" id="type" />
                <div className="h-4"></div>
            </div>
            <div>
                <label htmlFor="photo">Photo:</label>
                <input type="text" id="photo" />
                <div className="h-4"></div>
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" />
                <div className="h-4"></div>
            </div>
            <button>Submit Data</button>
        </form>
    )
}

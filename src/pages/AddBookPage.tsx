import AddBookForm from '../components/forms/AddBookForm';
import bgImage from '../../public/img/bg-6.avif';

export default function AddBookPage() {
    return (
        <div className="page-height relative overflow-y-scroll bg-blue-950">
            <div className="h-full w-full overflow-hidden opacity-25 lg:w-1/2 lg:opacity-100">
                <img
                    className="h-full w-full object-cover"
                    src={bgImage}
                    alt=""
                />
            </div>

            <div className="absolute top-0 z-10 flex h-full w-full items-center justify-center overflow-hidden">
                <div className="lg:h-full lg:w-1/2"></div>
                <div className="flex w-full flex-col items-center justify-center lg:h-full lg:w-1/2 lg:bg-blue-950">
                    <h1 className="mb-4 text-center font-poppins text-2xl text-white">
                        There's no such thing as
                        <br />
                        too many <span className="text-orange-400">books</span>.
                    </h1>
                    <AddBookForm />
                </div>
            </div>
        </div>
    );
}

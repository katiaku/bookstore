import LoginForm from '../components/forms/LoginForm';
import bgImage from '../../public/img/bg-5.avif';

export default function LoginPage() {
    return (
        <div className="page-height relative overflow-y-scroll bg-blue-950">
            <div className="h-full w-full overflow-hidden opacity-25">
                <img
                    className="h-full w-full object-cover"
                    src={bgImage}
                    alt=""
                />
            </div>

            <div className="absolute top-0 z-10 flex h-full w-full flex-col items-center justify-center">
                <h1 className="mx-8 mb-8 text-center font-poppins text-2xl text-white">
                    We've been missing you.
                    <br />
                    Log in to your{' '}
                    <span className="text-orange-400">BookShelve</span> account!
                </h1>
                <LoginForm />
            </div>
        </div>
    );
}

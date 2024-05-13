import Sad from '../../assets/sad.png';

export default function NotFoundPage(){
    return(
        <main className='bg-gray-100 h-screen flex flex-col justify-between'>
            <div className='mx-auto text-center pt-24'>
                <img src={Sad} alt="sad" className='mx-auto mb-8 w-[18rem] h-[24rem]'/>
                <h1 className='text-6xl font-bold text-gray-800 mb-4'>404 - Page not found</h1>
                <p className='text-xl text-gray-600 mb-8'>Oops! A pagina que você tentou acessar não pôde ser encontrada</p>
            </div>
        </main>  
    )
}
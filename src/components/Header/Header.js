import {Link} from 'react-router-dom'

export default function Header(props) {
    return (
        <div>
            <div className='bg-red-400 text-white px-2 py-2 flex items-center justify-between'>
                <h2 className="font-bold text-lg">React Router</h2>

                <div>
                    <Link to='/' className='px-2'>
                        Home
                    </Link>
                    <Link to='/places' className='px-2'>
                        Places
                    </Link>

                </div>

            </div>
        </div>
    )
}
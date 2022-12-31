import React from 'react'
import { Link } from 'react-router-dom'
import { BackIcon, DownloadIcon, LinkedInLogo, TwitterLogo } from '../../assets'
import ScoreComponent from './components/score';

const Unwrapped = () => {

  const data = {
    _id: "0x1cE742C9714edF159a4eD7C988d28E35118000df",
    nfts: 1,
    tokens: 0,
    contracts: 0,
    oldest: {
      block_timestamp: 1648711706000,
      time_ago: "9 months ago"
    },
    first_transaction_2022: 1648711706000,
    swaps: 0,
    transactions: 26,
    score: 64.0178865849085
  };

  let {
    first_transaction_2022: firstTx,
    score,
    nfts: nft,
    tokens: token,
    swaps: swap,
    transactions: tx,
    oldest: { 
      time_ago: joined 
    }
  } = data;

  score = score.toFixed(2);
  firstTx = new Date(firstTx).toDateString().split(' ').slice(1, 3).reverse().join(', ');

  // const joined = 'Joined 2022'
  // const firstTx = '21st Jan 2022'
  // const score = 0
  // const nft = 0
  // const token = 0
  // const swap = 0
  // const tx = 0

  return (
    <div className='text-white flex flex-col justify-center items-center font-Inter'>

      <div className='w-[250px] h-[250px] absolute top-[-15rem] z-[-1] bg-[#3A3AF4] blur-[80px] rounded-full'></div>

      <div className='flex text-center justify-center space-x-7 pt-[8vh]'>
        <h1 className='text-4xl'>
          Here is your #ETHUnwrapped <br />
          @0x0f.....00xx5
        </h1>
      </div>

      <div className="relative group mt-[10vh]">
        <div className=" absolute -inset-0.5 bg-gradient-to-r  from-[#EB8145] to-[#1E99FE] rounded-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="absolute -inset-0.5 bg-gradient-to-r  from-[#EA245A] to-[#6A38F5] rounded-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="relative px-7 py-4 bg-[#181818] rounded-lg leading-none flex items-center">
          <a>
            <ScoreComponent 
              firstTx={firstTx}
              score={score}
              nft={nft}
              token={token}
              swap={swap}
              tx={tx}
              joined={joined}
            />
          </a>

          <div className='flex flex-col space-y-7'>

            <div className='flex flex-col ml-[5vw]'>
              <div className='text-lg'>
                1. Download your video as an MP4 :
              </div>
              <div>
                <button className='bg-[#FFFF6D] flex justify-between text-black rounded-md px-5 py-3 mt-4'>
                  <div className='flex flex-col text-left'>
                    <div className='font-semibold'>
                      Download The Video
                    </div>
                    16.9MB
                  </div>

                  <DownloadIcon className='w-6 h-6 ml-4' />

                </button>
              </div>

            </div>

            <div className='flex flex-col ml-[5vw]'>
              <div className='text-lg'>
                2. Share your video on social media <br /> using <span className='font-bold'>#ETHUnwrapped2022</span>  :
              </div>
            </div>

            <div className='ml-[5vw] text-base'>
              <a href={`https://twitter.com/intent/tweet?hashtags=%20&original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Ehashtag%7Ctwgr%5ELoveTwitter&related=MetafySocial&text=%F0%9F%9A%80%F0%9F%94%A5%20It%27s%20%23EthUnwrapped%202022%20and%20I%27m%20loving%20it%21%20%F0%9F%92%B0%20%40MetafySocial%20%0A%0AJoined%20Eth%20%2D%20${joined}%0AFirst%20transaction%20of%202022%20%2D%20${firstTx}%0AMetaScore%20%2D%20${score}%F0%9F%A4%91%20%0ANFTs%20%2D%20${nft}%0ANew%20ERC20%20Tokens%20%2D%20${token}%0AToken%20Swaps%20%2D%20${swap}%0ATotal%20transactions%20%2D%20${tx}%0A%0AGet%20yours%20ethunwrapped%2Exyz%20%F0%9F%94%A5`} target="_blank" rel="noopener noreferrer">
                <button className='flex items-center bg-[#1DA1F2] px-4 py-2 rounded-lg'>
                  <TwitterLogo className='w-[30px] mr-5' />
                  Share on Twitter
                </button>
              </a>

            </div>

            <div className='ml-[5vw] text-base'>
              <button className='flex items-center bg-[#0A66C2] px-4 py-2 rounded-lg'>
                <LinkedInLogo className='w-[30px] mr-5' />
                Share on LinkedIn
              </button>
            </div>

            <Link to='/'>
              <button className='flex items-center absolute right-5 bottom-5'>
                Go Back
                <BackIcon className='w-6 h-6 ml-4' />
              </button>
            </Link>


          </div>

        </div>
      </div>

      <div className='mt-[20vh] text-2xl'>
        Made with <span className='text-[#FF0000]'>❤</span> by <a href='https://twitter.com/MetafySocial' target='_blank' rel='noreferrer'>@Metafy</a>
      </div>

    </div>
  )
}

export default Unwrapped
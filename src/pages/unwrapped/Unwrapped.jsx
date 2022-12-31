import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BackIcon, DownloadIcon, LinkedInLogo, TwitterLogo } from '../../assets'
import ScoreComponent from './components/score';
import html2canvas from 'html2canvas';
import axios from 'axios';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


const Unwrapped = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const componentRef = React.useRef();

  const download = () => {
    html2canvas(
      componentRef.current,
    ).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'image.png';
      link.href= imgData;
      link.click();
    });
  }

  const [score, setScore] = React.useState(null);
  const [first_transaction_2022, setFirst_transaction_2022] = React.useState(null);
  const [nft, setNft] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [swap, setSwap] = React.useState(null);
  const [tx, setTx] = React.useState(null);
  const [joined, setJoined] = React.useState(null);
  const [contracts, setContracts] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const classes = useStyles();
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/${id}`).then(res => {
      setLoading(false);
      res.data.score = res.data.score.toFixed(2);
      setScore(res.data.score);
      if(res.data.first_transaction_2022 === null) {
        res.data.first_transaction_2022 = 'Never Transacted';
      }else{
        res.data.first_transaction_2022 = new Date(res.data.first_transaction_2022).toDateString().split(' ').slice(1, 3).reverse().join(', ');
      }
      setFirst_transaction_2022(res.data.first_transaction_2022);
      setNft(res.data.nfts);
      setToken(res.data.tokens);
      setSwap(res.data.swaps);
      setTx(res.data.transactions);
      setJoined(res.data.oldest.time_ago);
      setContracts(res.data.contracts);
    }).catch(() => {
      alert(`Your eth address ${id} is not a valid address. Please try again.`);
      navigate('/');
    })
  }, [id, navigate])

  return (
    <div className='text-white flex flex-col justify-center items-center font-Inter'>

      <div className='w-[250px] h-[250px] absolute top-[-15rem] z-[-1] bg-[#3A3AF4] blur-[80px] rounded-full'></div>

      <div className='flex text-center justify-center space-x-7 pt-[8vh]'>
        <h1 className='text-4xl'>
          Here is your #ETHUnwrapped <br />
          @{id.slice(0, 4)}....{id.slice(-3)}
        </h1>
      </div>

      <div className="relative group mt-[10vh]">
        <div className=" absolute -inset-0.5 bg-gradient-to-r  from-[#EB8145] to-[#1E99FE] rounded-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="absolute -inset-0.5 bg-gradient-to-r  from-[#EA245A] to-[#6A38F5] rounded-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="relative px-7 py-4 bg-[#181818] rounded-lg leading-none flex items-center">
          <div>
            {!loading
            ?
            <ScoreComponent 
              firstTx={first_transaction_2022}
              score={score}
              nft={nft}
              token={token}
              swap={swap}
              tx={tx}
              joined={joined}
              contracts={contracts}
              ref={componentRef}
              id="ethUnwrapped"
            />
            :
            <Backdrop className={classes.backdrop} open>
              <CircularProgress color="inherit" />
            </Backdrop>}
          
          </div>

          <div className='flex flex-col space-y-7'>

            <div className='flex flex-col ml-[5vw]'>
              <div className='text-lg'>
                1. Download your Score Card :
              </div>
              <div>
                <button className='bg-[#FFFF6D] flex justify-between text-black rounded-md px-5 py-3 mt-4' onClick={download}>
                  <div className='flex flex-col text-left'>
                    <div className='font-semibold'>
                      Download Your Image
                    </div>
                    PNG
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
              <a href={`https://twitter.com/intent/tweet?hashtags=%20&original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Ehashtag%7Ctwgr%5ELoveTwitter&related=MetafySocial&text=%F0%9F%9A%80%F0%9F%94%A5%20It%27s%20%23EthUnwrapped%202022%20and%20I%27m%20loving%20it%21%20%F0%9F%92%B0%20%40MetafySocial%20%0A%0AJoined%20Eth%20%2D%20${joined}%0AFirst%20transaction%20of%202022%20%2D%20${first_transaction_2022}%0AMetaScore%20%2D%20${score}%F0%9F%A4%91%20%0ANFTs%20%2D%20${nft}%0ANew%20ERC20%20Tokens%20%2D%20${token}%0AToken%20Swaps%20%2D%20${swap}%0ATotal%20transactions%20%2D%20${tx}%0A%0AGet%20yours%20ethunwrapped%2Exyz%20%F0%9F%94%A5`} target="_blank" rel="noopener noreferrer">
                <button className='flex items-center bg-[#1DA1F2] px-4 py-2 rounded-lg'>
                  <TwitterLogo className='w-[30px] mr-5' />
                  Share on Twitter
                </button>
              </a>

            </div>

            <div className='ml-[5vw] text-base'>
            <a href={`https://www.linkedin.com/company/metafy01`} target="_blank" rel="noopener noreferrer">
              <button className='flex items-center bg-[#0A66C2] px-4 py-2 rounded-lg'>
                <LinkedInLogo className='w-[30px] mr-5' />
                Share on LinkedIn
              </button>
            </a>
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
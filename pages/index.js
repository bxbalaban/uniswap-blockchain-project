import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Main from '../components/Main'
import TransactionHistory from '../components/TransactionHistory'
import { GradientBackgroud } from 'gradient-background';
//  bg-[#2D242F]
const style={
  wrapper: 'h-screen max-h-screen h-min-screen w-screen  text-white select-none flex flex-col justify-between',
  bg: 'bg-[#2D242F]'
}

const Home = () => {
  return (
    <div className={`${style.wrapper} ${style.bg}` } >
      <Header/>
      <Main></Main>
      <TransactionHistory/>
    </div>
  )
}

export default Home

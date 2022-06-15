import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Main from '../components/Main'
import TransactionHistory from '../components/TransactionHistory'

const style = {
  wrapper: 'h-screen max-h-screen h-min-screen w-screen  text-white select-none flex flex-col justify-between',
  bg:'bg-gradient-to-b from-violet-600 via-purple-900 to-gray-900',
}

const Home = () => {
  return (
    <div className={`${style.wrapper} ${style.bg}`} >
      <Header />
      <Main></Main>
      <TransactionHistory />
    </div>
  )
}

export default Home

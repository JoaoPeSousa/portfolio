import { Inter } from '@next/font/google'
import Header from "../components/shared/Header";
import BaseLayout from "../components/layouts/BaseLayout";
const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
      <BaseLayout>
          <h1>I am Home page</h1>
      </BaseLayout>
  )
}


export default Home

import LiturgyTeachingPage from '../../components/learn/LiturgyTeachingPage.jsx'
import { liturgyPageConfig } from '../../data/liturgyPageConfig.js'

export default function LiturgyPage() {
  return <LiturgyTeachingPage relatedItems={liturgyPageConfig.relatedItems} />
}

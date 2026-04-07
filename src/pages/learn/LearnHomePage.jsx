import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import SectionHubLayout from '../../components/sections/SectionHubLayout.jsx'
import { learnHubTopicConfig } from '../../content/learnHubContent.js'

export default function LearnHomePage() {
  const { t } = useTranslation('common')

  const topics = useMemo(
    () =>
      learnHubTopicConfig.map(({ to, key }) => ({
        to,
        title: t(`learnHub.topics.${key}.title`),
        description: t(`learnHub.topics.${key}.description`),
        category: t('learnHub.topicCategory'),
      })),
    [t],
  )

  const contentSlots = useMemo(
    () => [
      { title: t('learnHub.notesHeading'), text: t('learnHub.notes.0') },
      { title: t('learnHub.cautionsHeading'), text: t('learnHub.cautions.0') },
    ],
    [t],
  )

  return (
    <SectionHubLayout
      title={t('learnHub.title')}
      eyebrow={t('learnHub.eyebrow')}
      intro={t('learnHub.intro')}
      overview={t('learnHub.overview')}
      topics={topics}
      topicsTitle={t('learnHub.topicsTitle')}
      topicsSubtitle={t('learnHub.topicsSubtitle')}
      contentSlots={contentSlots}
    />
  )
}

import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import SectionHubLayout from '../../components/sections/SectionHubLayout.jsx'
import { practiceHubTopicConfig } from '../../content/practiceHubContent.js'

export default function PracticeHomePage() {
  const { t } = useTranslation('common')

  const topics = useMemo(
    () =>
      practiceHubTopicConfig.map(({ to, key }) => ({
        to,
        title: t(`practiceHub.topics.${key}.title`),
        description: t(`practiceHub.topics.${key}.description`),
        category: t('practiceHub.topicCategory'),
      })),
    [t],
  )

  const contentSlots = useMemo(
    () => [
      { title: t('practiceHub.notesHeading'), text: t('practiceHub.notes.0') },
      { title: t('practiceHub.cautionsHeading'), text: t('practiceHub.cautions.0') },
    ],
    [t],
  )

  return (
    <SectionHubLayout
      title={t('practiceHub.title')}
      eyebrow={t('practiceHub.eyebrow')}
      intro={t('practiceHub.intro')}
      overview={t('practiceHub.overview')}
      topics={topics}
      topicsTitle={t('practiceHub.topicsTitle')}
      topicsSubtitle={t('practiceHub.topicsSubtitle')}
      contentSlots={contentSlots}
    />
  )
}

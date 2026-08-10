import DescriptionOutlined from '@mui/icons-material/DescriptionOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailOutlined from '@mui/icons-material/EmailOutlined'
import type { SocialKind } from '../../data/types'

export default function SocialIcon({ kind }: { kind: SocialKind }) {
  switch (kind) {
    case 'github':
      return <GitHubIcon />
    case 'linkedin':
      return <LinkedInIcon />
    case 'email':
      return <EmailOutlined />
    case 'resume':
      return <DescriptionOutlined />
    default: {
      // A SocialKind without an icon fails the build here.
      const unhandled: never = kind
      return unhandled
    }
  }
}

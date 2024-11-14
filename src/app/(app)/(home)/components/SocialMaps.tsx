import { motion } from 'motion/react'

import { HoverTooltip } from '~/components/common/HoverTooltip'
import {
  getSocialIconName,
  isSupportIcon,
  SocialIcon,
} from '~/components/modules/home/SocialIcon'

const socialConfig = {
  x: 'Zach98899',
  github: 'Zach677',
  rss: 'https://ssstttar.com/feed',
  email: 'i@ssstttar.com',
}

export const SocialMaps: React.FC = () => {
  return (
    <motion.ul className="mt-8 flex flex-wrap justify-center gap-6 md:justify-start">
      {Object.entries(socialConfig).map(([type, id]) => {
        if (!isSupportIcon(type)) return null
        return (
          <motion.li
            key={type}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            <HoverTooltip tooltipText={getSocialIconName(type)}>
              <SocialIcon id={id} type={type} />
            </HoverTooltip>
          </motion.li>
        )
      })}
    </motion.ul>
  )
}

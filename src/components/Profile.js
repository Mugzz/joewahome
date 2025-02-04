import { Typography } from '@material-ui/core'
import CustomTimeline, { CustomTimelineSeparator } from './Timeline'
import '../assets/css/Profile.css'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import data from '../utils/data'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineContent from '@material-ui/lab/TimelineContent'
import GetAppIcon from '@material-ui/icons/GetApp'

import CustomButton from './Button'
const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent>
      {link ? (
        <Typography className='timeline_text'>
          <span>{title}:</span>{' '}
          <a href={link} target='_blank'>
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className='timeline_text'>
          <span>{title}:</span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
)

const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>{data.name}</Typography>
        <Typography className='title'>{data.title}</Typography>
        <br />
      </div>

      <figure className='profile_image'>
        <img
          src='https://res.cloudinary.com/doammcpie/image/upload/v1688245475/file_nykhgw.jpg'
          alt='profile'
        />
      </figure>

      <div className='profile_information'>
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title='Name' text={data.name} />
          <CustomTimelineItem title='Title' text={data.title} />
          <CustomTimelineItem title='Email' text={data.email} />
          {Object.keys(data.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={data.socials[key].text}
              link={data.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <br />
        <div className='button_container'>
          <a
            className='btn_link'
            target='_blank'
            href='https://res.cloudinary.com/doammcpie/image/upload/v1688245298/my_cv27.5.2023_dwztck.pdf'
            download
          >
            <CustomButton text={'Download CV'} icon={<GetAppIcon />} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile

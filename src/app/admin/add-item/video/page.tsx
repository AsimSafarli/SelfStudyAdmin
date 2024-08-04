import VideoForm from '@/components/video/VideoForm'
import React from 'react'
import { VscChromeClose } from 'react-icons/vsc'

function VideoAddPage() {
  return (
    <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3  justify-between">
              <VideoForm />
            </div>
          </div>
  )
}

export default VideoAddPage
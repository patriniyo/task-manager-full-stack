import React from 'react'
import Tasktitle from '@/components/Tasktitle'
import TaskCard from '@/components/TaskCard'

const AllTasksPage = () => {
  return (
    <div>
    <Tasktitle title="All Tasks"/>
    <TaskCard description="Some description description description" title="Just Title"/>
    <TaskCard description="Some description description description" title="Just Title"/>
    <TaskCard description="Some description description description" title="Just Title"/>
  </div>
  )
}

export default AllTasksPage

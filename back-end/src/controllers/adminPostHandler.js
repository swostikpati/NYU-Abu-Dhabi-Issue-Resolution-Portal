import Issue from '../../models/issueModel.js';

export async function adminPostHandler(req, res) {
  const issueindex = req.body.issueindex;
  const newcomment = req.body.commentbox;
  const currentStatus = req.body.issueStatus;
  const currentPriority = req.body.issuePriority;
  const departmentTags = req.body.issueDepartmentTags;
  const attachments = req.body.attachments;
  console.log(req.body);
  try {
    const specificIssue = await Issue.findOne({ index: issueindex });
    if (!specificIssue) {
      console.error('This specific issue could not found');
      return;
    }
      if (newcomment !== undefined) {
      specificIssue.comments.unshift(newcomment);
    }
    if (currentStatus !== undefined) {
      specificIssue.currentStatus = currentStatus;
    }
    if (currentPriority !== undefined) {
      specificIssue.currentPriority = currentPriority;
    }
    if (departmentTags !== undefined && departmentTags.length !== 0) {
      specificIssue.departments = departmentTags;
    }
    if (attachments !== undefined) {
      specificIssue.attachments = attachments;
    }
    const updatedIssue = await specificIssue.save();
    console.log('Issue updated:', updatedIssue);
  } catch (err) {
    console.error('Error updating issue:', err);
  }
  res.status(200).send("Success");
}

package org.presents.issuetracker.issue.service;

import java.util.List;
import java.util.stream.Collectors;

import org.presents.issuetracker.issue.dto.IssueDto;
import org.presents.issuetracker.issue.dto.request.IssueCreateRequestDto;
import org.presents.issuetracker.issue.dto.response.IssueDetailResponse;
import org.presents.issuetracker.issue.entity.Assignee;
import org.presents.issuetracker.issue.entity.Issue;
import org.presents.issuetracker.issue.entity.IssueLabel;
import org.presents.issuetracker.issue.mapper.IssueMapper;
import org.presents.issuetracker.issue.repository.IssueRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class IssueService {
	private final IssueRepository issueRepository;
	private final IssueMapper issueMapper;

	@Transactional(rollbackFor = Exception.class)
	public Long create(IssueCreateRequestDto issueCreateRequestDto) {
		Long savedIssueId = issueRepository.save(
			Issue.builder()
				.title(issueCreateRequestDto.getTitle())
				.authorId(issueCreateRequestDto.getAuthorId())
				.contents(issueCreateRequestDto.getContents())
				.build()
		);

		//TODO: 만약 assignee가 지정이 안된다면 assignee:null인지 아니면 아예 assignee라는 key가 없는지
		if (issueCreateRequestDto.getAssigneeIds() != null) {
			issueRepository.deleteAllAssignee(savedIssueId);
			issueRepository.addAssignee(
				issueCreateRequestDto.getAssigneeIds().stream()
					.map(assigneeId ->
						Assignee.builder()
							.issueId(savedIssueId)
							.userId(assigneeId)
							.build()
					)
					.collect(Collectors.toList())
			);
		}

		if (issueCreateRequestDto.getLabelIds() != null) {
			issueRepository.deleteAllLabel(savedIssueId);
			issueRepository.addLabel(
				issueCreateRequestDto.getLabelIds().stream()
					.map(labelId ->
						IssueLabel.builder()
							.issueId(savedIssueId)
							.labelId(labelId)
							.build()
					)
					.collect(Collectors.toList())
			);
		}

		if (issueCreateRequestDto.getMilestoneId() != null) {
			issueRepository.setMilestone(
				savedIssueId, issueCreateRequestDto.getMilestoneId()
			);
		}

		return savedIssueId;
	}

	public List<IssueDto> getIssueList() {
		return issueMapper.getIssueList();
	}

	public IssueDetailResponse getIssueDetail() {
		return IssueDetailResponse.fromVo(issueMapper.getIssueDetail());
	}
}

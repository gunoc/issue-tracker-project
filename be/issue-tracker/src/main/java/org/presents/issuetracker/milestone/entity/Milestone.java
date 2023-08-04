package org.presents.issuetracker.milestone.entity;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class Milestone {
	private Long id;
	private String name;
	private LocalDateTime deadline;
	private String description;
	private String status;
}

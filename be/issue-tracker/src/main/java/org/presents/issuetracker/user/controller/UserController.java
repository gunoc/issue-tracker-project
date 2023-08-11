package org.presents.issuetracker.user.controller;

import java.util.List;

import org.presents.issuetracker.user.dto.response.UserResponse;
import org.presents.issuetracker.user.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
	private final UserService userService;

	@GetMapping("/previews")
	public ResponseEntity<List<UserResponse>> getUserPreviews() {
		List<UserResponse> userPreviews = userService.getUserPreviews();
		// 필터링 뷰에서 '담당자가 없는 이슈'를 표시하기 위해서 0번째에 객체 추가
		userPreviews.add(0, UserResponse.getUserNotAssignedResponse());
		return ResponseEntity.ok().body(userPreviews);
	}
}
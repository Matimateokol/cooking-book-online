package pl.poli.paint.tasty.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class MediaDTO {
    private Long id;
    private String linkedIn;
    private String facebook;
    private String twitter;
    private String github;
    private String discord;
}

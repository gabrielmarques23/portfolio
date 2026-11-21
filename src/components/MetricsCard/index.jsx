import {
  MetricsContainer,
  ProfileHeader,
  AvatarBox,
  ProfileInfo,
  StatsGrid,
  StatItem,
  StackSection,
  StackChips,
  Chip
} from "./style";

export function MetricsCard({ profile, metrics = [], stack = [], avatarSrc }) {
  return (
    <MetricsContainer aria-labelledby="profile-title">
      <ProfileHeader>
        <AvatarBox>
          {avatarSrc ? (
            <img src={avatarSrc} alt={profile?.name || "Avatar"} />
          ) : (
            <span style={{ fontSize: "1.2rem", fontWeight: "700" }}>GM</span>
          )}
        </AvatarBox>
        <ProfileInfo>
          <h2 id="profile-title">{profile?.name || "Gabriel Marques"}</h2>
          <span>{profile?.role || "Desenvolvedor fullstack"}</span>
        </ProfileInfo>
      </ProfileHeader>

      {metrics.length > 0 && (
        <StatsGrid>
          {metrics.map((item, index) => (
            <StatItem key={index}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </StatItem>
          ))}
        </StatsGrid>
      )}

      {stack.length > 0 && (
        <StackSection id="skills" aria-labelledby="skills-title">
          <h3 id="skills-title">Tecnologias & habilidades</h3>
          <StackChips>
            {stack.map((tech, index) => (
              <Chip key={index}>{tech}</Chip>
            ))}
          </StackChips>
        </StackSection>
      )}
    </MetricsContainer>
  );
}

import { ReactComponent as CheckBoxInitial } from '@assets/icons/checkBoxInitial.svg';
import { ReactComponent as AlertCircle } from '@assets/icons/alertCircle.svg';
import { ReactComponent as Archive } from '@assets/icons/archive.svg';
import { Button } from '@components/common/Button';
import { useTheme } from '@emotion/react';
import { DropDownIndicator } from '@components/common/dropDown/DropDownIndicator';
import { DropDownPanel } from '@components/common/dropDown/DropDownPanel';
import { useNavigate } from 'react-router-dom';
import { generateEncodedQuery } from '@utils/generateEncodedQuery';
import { useState } from 'react';

type Props = {
  openIssueCount: number;
  closedIssueCount: number;
};

export const TableHeader: React.FC<Props> = ({
  openIssueCount = 0,
  closedIssueCount = 0,
}) => {
  const theme = useTheme() as any;
  const [panelStates, setPanelStates] = useState({
    assigneesPanel: false,
    labelPanel: false,
    milestonePanel: false,
    authorPanel: false,
  });
  const navigate = useNavigate();

  const onIssueFilterClick = (queryValue: 'open' | 'closed') => {
    const query = generateEncodedQuery('status', queryValue);

    navigate(query);
  };

  return (
    <div
      css={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
    >
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <CheckBoxInitial
          width={16}
          height={16}
          stroke={theme.neutral.border.default}
          css={{
            padding: '0px 32px',
            cursor: 'pointer',

            '&: hover': {
              opacity: theme.opacity.hover,
            },
          }}
        />

        <div css={{ display: 'flex', gap: '24px', textWrap: 'nowrap' }}>
          <Button
            typeVariant="ghost"
            onClick={() => onIssueFilterClick('open')}
          >
            <AlertCircle stroke={theme.neutral.text.strong} />
            <span
              css={{ font: theme.fonts.availableMedium16 }}
            >{`열린 이슈 (${openIssueCount})`}</span>
          </Button>
          <Button
            typeVariant="ghost"
            onClick={() => onIssueFilterClick('closed')}
          >
            <Archive stroke={theme.neutral.text.strong} />
            <span
              css={{ font: theme.fonts.availableMedium16 }}
            >{`닫힌 이슈 (${closedIssueCount})`}</span>
          </Button>
        </div>
      </div>

      <div
        css={{
          display: 'flex',
          gap: '32px',
          marginRight: '32px',
        }}
      >
        <DropDownIndicator
          size="M"
          indicator="담당자"
          isPanelOpen={panelStates.assigneesPanel}
        >
          <DropDownPanel
            position="right"
            panelHeader="담당자 필터"
            onOutsideClick={() =>
              setPanelStates((prev) => ({ ...prev, assigneesPanel: false }))
            }
          >
            <div></div>
          </DropDownPanel>
        </DropDownIndicator>
        <DropDownIndicator
          size="M"
          indicator="레이블"
          isPanelOpen={panelStates.labelPanel}
        >
          <DropDownPanel
            position="right"
            panelHeader="레이블 필터"
            onOutsideClick={() =>
              setPanelStates((prev) => ({ ...prev, milestonePanel: false }))
            }
          >
            <div></div>
          </DropDownPanel>
        </DropDownIndicator>
        <DropDownIndicator
          size="M"
          indicator="마일스톤"
          isPanelOpen={panelStates.milestonePanel}
        >
          <DropDownPanel
            position="right"
            panelHeader="마일스톤 필터"
            onOutsideClick={() =>
              setPanelStates((prev) => ({ ...prev, milestonePanel: false }))
            }
          >
            <div></div>
          </DropDownPanel>
        </DropDownIndicator>
        <DropDownIndicator
          size="M"
          indicator="작성자"
          isPanelOpen={panelStates.authorPanel}
        >
          <DropDownPanel
            position="right"
            panelHeader="작성자 필터"
            onOutsideClick={() =>
              setPanelStates((prev) => ({ ...prev, authorPanel: false }))
            }
          >
            <div></div>
          </DropDownPanel>
        </DropDownIndicator>
      </div>
    </div>
  );
};

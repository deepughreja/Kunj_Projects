import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Grid, GridColumn as Column, GridExpandChangeEvent, GridGroupChangeEvent } from '@progress/kendo-react-grid';
import { groupBy, GroupDescriptor, GroupResult } from '@progress/kendo-data-query';

import { setExpandedState, setGroupIds } from '@progress/kendo-react-data-tools';

import products from './products.json';
import { Product } from './interfaces';

const initialGroup: GroupDescriptor[] = [{ field: 'CategoryName' }];

const processWithGroups = (data: any[], group: GroupDescriptor[]) => {
    const newDataState = groupBy(data, group);

    setGroupIds({ data: newDataState, group: group });

    return newDataState;
};

export const Roles = () => {
    const [group, setGroup] = React.useState(initialGroup);
    const [resultState, setResultState] = React.useState<GroupResult[]>(processWithGroups(products, initialGroup));
    const [collapsedState, setCollapsedState] = React.useState<string[]>([]);

    const onGroupChange = React.useCallback(
        (event: GridGroupChangeEvent) => {
            const newDataState = processWithGroups(products, event.group);

            setGroup(event.group);
            setResultState(newDataState);
        },
        []
    );

    const onExpandChange = React.useCallback(
        (event: GridExpandChangeEvent) => {
            const item = event.dataItem;

            if (item.groupId) {
                const newCollapsedIds = !event.value ?
                    [...collapsedState, item.groupId] :
                    collapsedState.filter(groupId => groupId !== item.groupId);
                setCollapsedState(newCollapsedIds);
            }
        },
        [collapsedState]
    );

    const newData = setExpandedState({
        data: resultState,
        collapsedIds: collapsedState
    });

    return (
        <div className="page-content">
            <Grid
                style={{ height: '520px' }}
                groupable={true}
                data={newData}
                onGroupChange={onGroupChange}
                group={group}
                onExpandChange={onExpandChange}
                expandField="expanded"
            >
                <Column field="RoleId" filterable={false} title="ID" width="50px" />
                {/* <Column field="CategoryName" title="Category Name" /> */}
                <Column field="RoleName" title="Role Name" />
                <Column field="Vacancy" title="Vacancy" filter="numeric" />
                
            </Grid>
        </div>
    );
};

